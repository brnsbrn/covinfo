function getglobalpositive() {
    const getDataPositive = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const positive = document.querySelector('.global-positive')
            positive.innerHTML = results.confirmed.value;
        })
        .catch(error => {
            console.log(error);
        });;
}
export default getglobalpositive;