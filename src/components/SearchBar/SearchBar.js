import React, {useContext, useRef} from 'react'
import './SearchBar.css';
import WeatherContext from '../../weather-context'
import CityList from '../../cities.json';

function autocomplete(inp, arr) {
  var currentFocus;
  if(inp) {
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        // for (i = 0; i < arr.length; i++) {
        //   if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        //     b = document.createElement("DIV");
        //     b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        //     b.innerHTML += arr[i].substr(val.length);
        //     b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        //     b.addEventListener("click", function(e) {
        //         inp.value = this.getElementsByTagName("input")[0].value;
        //         closeAllLists();
        //     });
        //     a.appendChild(b);
        //   }
        // }
        let start = 0, end = arr.length-1;
        let first_occ = -1, last_occ = -1;
        while(start <= end) {
          let mid = parseInt((start + end) / 2);
          if(arr[mid].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            if(mid === 0 || arr[mid-1].substr(0, val.length).toUpperCase() < val.toUpperCase()) {
              first_occ = mid;
              break;
            }
            else end = mid-1;
          }
          else if(arr[mid].substr(0, val.length).toUpperCase() > val.toUpperCase()) {
            end = mid-1;
          }
          else start = mid + 1;
        }
        start = 0;
        end = arr.length-1;
        while(start <= end) {
          let mid = parseInt((start + end) / 2);
          if(arr[mid].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            if(mid === arr.length-1 || arr[mid+1].substr(0, val.length).toUpperCase() > val.toUpperCase()) {
              last_occ = mid;
              break;
            }
            else start = mid + 1;
          }
          else if(arr[mid].substr(0, val.length).toUpperCase() > val.toUpperCase()) {
            end = mid-1;
          }
          else start = mid + 1;
        }
        if(first_occ === -1 || last_occ === -1) return false;
        for (i = first_occ; i <= last_occ; i++) {
          // if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          // }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode === 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode === 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
  }
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var cities = CityList.cities;

export default function SearchBar() {
  const myContainer = useRef(null);
  autocomplete(myContainer.current, cities)
  const weatherContext = useContext(WeatherContext)
  return (
    // <div className="search-bar">
    //   <span class="material-symbols-outlined">search</span>
    //     <input type="text" className="form-control" focus="false" 
    //            id="search-bar-input" placeholder="Search something..." 
    //            onKeyUp={(e) => {
    //             if(e.keyCode === 13)
    //               weatherContext.setLocation(e.target.value)
    //             }}/>
    // </div>
    <div className="search-bar">
      <span class="material-symbols-outlined">search</span>
      <form autocomplete="off" action="">
        <div class="autocomplete">
          <input ref={myContainer} type="text" className="form-control" focus="false" 
                id="search-bar-input" placeholder="Search location..." 
                onKeyUp={(e) => {
                  if(e.keyCode === 13)
                    weatherContext.setLocation(e.target.value)
                  }}/>
        </div>
      </form>
    </div>
  )
}
