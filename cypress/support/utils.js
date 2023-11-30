class Util {
    screenshot() {
        const dateFull = new Date();

        var d = dateFull.getDate();
        var m = dateFull.getMonth() + 1;
        var y = dateFull.getFullYear();
        var h = dateFull.getHours();
        var mn = dateFull.getMinutes();
        var s = dateFull.getSeconds();

        var dateTimeCurrent = '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + ' ' + h + ':' + mn + s;

        cy.screenshot(dateTimeCurrent)
    }
}

export default new Util()