// Varabiles
let years = []
const form = document.getElementById("myForm");
const analyse = form[14];
const canvasPlace = document.getElementById("canvasPlace");
const mainTable = document.getElementById("main-table")
const showarea = document.getElementById("showArea");

// Add Year
form.addEventListener ("submit", function(e) {
    e.preventDefault();
    mainTable.classList.remove("d-none")
    addYear( e.target[0].value,
        e.target[1].value, e.target[2].value, e.target[3].value,
        e.target[4].value, e.target[5].value, e.target[6].value,
        e.target[7].value, e.target[8].value,e.target[9].value,
        e.target[10].value, e.target[11].value, e.target[12].value
    );
    pushInLocalStorage();
    drowResult();
    clearFormAfterInsertData();
})

function addYear (m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12) {
    years.push(
        {
            Year : m0,
            January : m1,
            February : m2,
            March : m3,
            April : m4,
            May : m5,
            June : m6,
            July : m7,
            August : m8,
            September : m9,
            October : m10,
            November : m11,
            December : m12
        }
    )
    pushInLocalStorage()
    drowResult();
}


function pushInLocalStorage() {
    const yearsInLocalStorage = JSON.stringify(years)
    localStorage.setItem("years", yearsInLocalStorage);
}

function drowResult() {
    showarea.innerHTML = ""
    years = JSON.parse(localStorage.getItem("years"))
    years.forEach((item, i) => {
        // Drow Table To Show Products
        const tr = document.createElement("tr")
        const yearTd = document.createElement("td");
        const JanuaryTd = document.createElement("td");
        const FebruaryTd = document.createElement("td");
        const MarchTd = document.createElement("td");
        const AprilTd = document.createElement("td")
        const MayTd = document.createElement("td")
        const JuneTd = document.createElement("td")
        const JulyTd = document.createElement("td")
        const AugustTd = document.createElement("td")
        const SeptemberTd = document.createElement("td")
        const OctoberTd = document.createElement("td")
        const NovemberTd = document.createElement("td")
        const DecemberTd = document.createElement("td")
        const totalTd = document.createElement("td")
        const porductEdit = document.createElement("td")
        const returnButton = document.createElement("button");
        const romveButton = document.createElement("button");

        // caluce the total value
        const totalValue = +item.February + +item.January + +item.March + +item.April + +item.May + +item.June + +item.July + +item.August + +item.September + +item.October + +item.November + +item.November
        // Inner Products In Table
        yearTd.innerHTML = item.Year;
        JanuaryTd.innerHTML = item.January;
        FebruaryTd.innerHTML = item.February;
        MarchTd.innerHTML = item.March;
        AprilTd.innerHTML = item.April;
        MayTd.innerHTML = item.May;
        JuneTd.innerHTML = item.June;
        JulyTd.innerHTML = item.July;
        AugustTd.innerHTML = item.August;
        SeptemberTd.innerHTML = item.September;
        OctoberTd.innerHTML = item.October;
        NovemberTd.innerHTML = item.November;
        DecemberTd.innerHTML = item.December;
        totalTd.innerHTML = totalValue;
        returnButton.innerHTML = "Return";
        romveButton.innerHTML = "Delate";

        // Add Classes
        returnButton.classList.add("btn", "btn-info", "text-white", "rounded-pill", "me-2")
        romveButton.classList.add("btn", "btn-danger", "text-white", "rounded-pill")
        tr.classList.add("text-center")

        // Appending Child
        porductEdit.appendChild(returnButton);
        porductEdit.appendChild(romveButton);
        tr.appendChild(yearTd);
        tr.appendChild(JanuaryTd);
        tr.appendChild(FebruaryTd);
        tr.appendChild(MarchTd);
        tr.appendChild(AprilTd);
        tr.appendChild(MayTd);
        tr.appendChild(JuneTd);
        tr.appendChild(JulyTd);
        tr.appendChild(AugustTd);
        tr.appendChild(SeptemberTd);
        tr.appendChild(OctoberTd);
        tr.appendChild(NovemberTd);
        tr.appendChild(DecemberTd);
        tr.appendChild(totalTd);
        tr.appendChild(porductEdit);
        showarea.appendChild(tr);

         // return Button
        returnButton.addEventListener("click", function (e) {
            restoreDataInputs(years[i].Year, years[i].January, years[i].February, years[i].March, years[i].April, years[i].May, years[i].June , years[i].July, years[i].August, years[i].September, years[i].October, years[i].November, years[i].December)
            pushInLocalStorage();
            drowResult();
         });
        
        // Delate Button
        romveButton.addEventListener("click", function () {
            years.splice(i, 1);
            pushInLocalStorage();
            drowResult();
        });

    })
}

// return Data To Form
function restoreDataInputs(year, Jan, Feb, Mar, Apr, May, Jun, July, Aug, Sept, Oct, Nov, Dec) {
    form[0].value = year;
    form[1].value = Jan;
    form[2].value = Feb;
    form[3].value = Mar;
    form[4].value = Apr;
    form[5].value = May;
    form[6].value = Jun;
    form[7].value = July;
    form[8].value = Aug;
    form[9].value = Sept;
    form[10].value = Oct;
    form[11].value = Nov;
    form[12].value = Dec;
}
if (localStorage.getItem("years") !== null) {
    mainTable.classList.remove("d-none")
    drowResult();
}

function clearFormAfterInsertData() {
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
    form[4].value = "";
    form[5].value = "";
    form[6].value = "";
    form[7].value = "";
    form[8].value = "";
    form[9].value = "";
    form[10].value = "";
    form[11].value = "";
    form[12].value = "";
    form[13].value = "";
}

// analyze button
analyse.addEventListener("click", function (e) {
    myChart1.classList.remove("d-none")
    console.log(myChart1)
    createCanvas(+form[0].value,
        +form[1].value, +form[2].value, +form[3].value,
        +form[4].value, +form[5].value, +form[6].value,
        +form[7].value, +form[8].value, +form[9].value,
        +form[10].value, +form[11].value, +form[12].value)
})

// create canvas
function createCanvas(year, Jan, Feb, Mar, Apr, May, Jun, July, Aug, Sept, Oct, Nov, Dec) {
    const myChart1 = document.getElementById('myChart1')
    const labels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const data1 = [Jan, Feb, Mar, Apr, May, Jun, July, Aug, Sept, Oct, Nov, Dec];
    const colors1 = ['#49A9EA', '#36CAAB', '#3449SE', '#B370CF', '#AC5353', '#CFD4D8', '#EEEEEE', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    let chart1 = new Chart(myChart1, {
        type: 'pie',
        data: {
            labels: labels1,
            datasets: [{
                data: data1,
                backgroundColor: colors1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                // tooltip: {
                //     enabled: false 
                // },
                datalabels: {
                    align: 'center',
                    formatter: (value, context) => {
                        const datapoints =  context.chart.config.data.datasets[0].data
                        function totalSum (total, datapoint) {
                            return total + datapoint
                        }
                        const total = datapoints.reduce(totalSum, 0)
                        const percentageValue = (value / total * 100).toFixed(1)
                        return `${percentageValue}%` ;
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}