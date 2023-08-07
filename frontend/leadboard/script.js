const API_URL = `http://localhost:3000/api/main`;

let parent = document.getElementById('premiumuser');

const leadBoard = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/is-premium`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const {result} = await response.json();
  if (result.isPremium === true) {
    allUserTotalExpenses()
  } else {
    alert(" you are not a premium user ")
  }
}
// To show alluser tootal expenses
const allUserTotalExpenses = async () => {
  const response = await fetch(`${API_URL}/lead-board`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {result} = await response.json();
  console.log(result)
  buildTable(result)
}
// Table 
const buildTable = async (data) => {
  const table = document.getElementById('myTable')

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
              <td>${data[i]._id}</td>
              <td>${data[i].name}</td>
              <td>${data[i].totalamount}</td>
             </tr>`
    table.innerHTML += row
  }
}

// To downloaad the csv
const downloadFunction = document.getElementById('btn');
downloadFunction.addEventListener('click', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/download`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const link = document.createElement('a');
      link.href = data.URL;
      link.download = 'myexpenses.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    throw error;
  }
});

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const showLinks = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/alllinks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const { result } = await response.json();
    addLinksToPage(result);
  } catch (error) {
    console.error(error);
  }
};

const addLinksToPage = (array) => {
  const parent = document.getElementById('linkbox');
  array.forEach((element, index) => {
    const link = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = element.url;
    anchor.textContent = `link ${index + 1} downloaded time ${element.createdAt}`;
    link.appendChild(anchor);
    parent.appendChild(link);
  });
};



showLinks()
leadBoard()