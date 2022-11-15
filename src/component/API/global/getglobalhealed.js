function getglobalhealed() {

    const getDataRecovered = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const heal = document.querySelector('.global-healed')
            heal.innerHTML = results.recovered.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalhealed;