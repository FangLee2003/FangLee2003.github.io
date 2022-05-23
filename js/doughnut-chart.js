var option = {
    title: {
        display: true,
        text: "Total Assets",
        fontColor: "white",
        fontSize: 22,
        padding: 20
    },
    legend: {
        position: 'bottom',
        labels: {
            fontColor: "white"
        },
    },
    elements: {
        arc: {
            borderWidth: 0
        }
    }
}
new Chart("doughnut-canvas", {
    type: "doughnut",
    data: {
        labels: ['Bitcoin', 'ETH', 'Dogecoin'],
        datasets: [{
            data: [25, 15, 60],
            backgroundColor: ['#838BED', '#3B3DA1', '#1A1A74'],
            hoverBackgroundColor: ["#838BED", "#3B3DA1", "#1A1A74"]
        }]
    },
    options: option
});