function getdataindo() {

    const getDataPositive = fetch('https://covid19.mathdro.id/api/countries/INDONESIA')
        .then(results => results.json())
        .then(results => {

            const indopos = document.querySelector('.indo-positive');
            indopos.innerHTML = results.confirmed.value;
            const indodeaths = document.querySelector('.indo-deaths');
            indodeaths.innerHTML = results.deaths.value;
            const indoheal = document.querySelector('.indo-healed');
            indoheal.innerHTML = results.recovered.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getdataindo;