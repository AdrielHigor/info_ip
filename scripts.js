function add_data(data) {
  console.log(data);
  var table = document.getElementById("dados");
  var tr = document.createElement('tr');   
  var ip = document.createElement('td');
  ip.innerHTML = data.ip
  var org = document.createElement('td');
  org.innerHTML = data.org
  var country = document.createElement('td');
  country.innerHTML = data.country
  var city = document.createElement('td');
  city.innerHTML = data.city
  tr.appendChild(ip);
  tr.appendChild(org);
  tr.appendChild(country);
  tr.appendChild(city);
  // tr.appendChild(remove);
  table.appendChild(tr);
  document.body.appendChild(table);
}

function ip_search() {
  var ip = document.getElementById("Search").value;
  console.log(ip);
  var url = `https://ipinfo.io/${ip}`;
  console.log(url);

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    async: false,
    success: function(data) {
      add_data(data);
    }
  });
}
