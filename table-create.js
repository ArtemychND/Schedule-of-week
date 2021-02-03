(function() {

  // Array for identify of cell by time, from which I expecte to add the data from localStorage

const times = [10, 11, 12, 13, 14, 15, 16, 17, 18];

// function createTable create table from tbody component( thead already exist in index.html)

function createTable() {
  const table = document.querySelector('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  // this loop create rows and th element's for time's cells
  
  for(let key of times) {
      let tr = document.createElement('tr');
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      tr.appendChild(th);
      th.appendChild(text)
      tbody.appendChild(tr);

      // this loop to apply to function recursion 'createTd', which create td's elements

      for(let j = 0; j < 5; j++) {
        if(key < 19) {
          createTd(tr, key, j)
        }
      }
    }
  }
  
  createTable()  // call 
  
    // this function 
  
    /**
     * Function createTd - function was created by creating table cells
     * @param {*} row tr element
     * @param {*} key Array of time
     * @param {*} i = j number of iteration, indexday: mon - 0; tue-1 and so on...
     */

  function createTd(row, key, i) {
    let cell = document.createElement('td')
    let cellText = document.createTextNode('');
    cell.appendChild(cellText);
    row.appendChild(cell);
    cell.dataset.time = key;
    cell.dataset.indexday = i;
  }
  
})()