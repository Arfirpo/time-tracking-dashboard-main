import data from '../data.json' assert {type: 'json'};

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section')

dailyBtn.addEventListener('click', ()=>{
    data.forEach(element => {
        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background">
                <img class="card__image" src="./assets/images/icon-work.svg" alt="work-icon">
            </div>
            <div class="card__details">
                <div class="card__activity">
                    <p class="card__title">${element.title}</p>
                    <img src="./assets/images/icon-ellipsis.svg" alt="ellipsis-icon">
                </div>
                <div class="card__time">
                    <p class="card__hour">32hrs</p>
                    <p class="previous">Last week - 36hrs</p>
                </div>
            </div>
        </div>`
    });
})