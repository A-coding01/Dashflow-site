
(() => {

    // ============================
    // DASHBOARD GREETING
    // ============================

    const heading = document.querySelector(".page-heading p");
    const hour = new Date().getHours();

    if (heading) {
        let greeting;

        if (hour < 12) {
            greeting = "Good morning! Here's what's happening today.";
        } else if (hour < 18) {
            greeting = "Good afternoon! Here's what's happening today.";
        } else {
            greeting = "Good evening! Here's what's happening today.";
        }

        heading.textContent = greeting;
    }


    // ============================
    // ACTIVE NAVIGATION
    // ============================

    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            menuLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // ============================
    // NOTIFICATION BUTTON
    // ============================

    const notification = document.querySelector(".notification");

    if (notification) {

        notification.addEventListener("click", () => {

            alert("You're all caught up! No new notifications.");

        });

    }


    // ============================
    // REVENUE CHART
    // ============================

    const chartArea = document.querySelector(".chart-placeholder");

    if (chartArea && typeof Chart !== "undefined") {

        chartArea.innerHTML = '<canvas id="revenueChart"></canvas>';

        const canvas = document.getElementById("revenueChart");

        new Chart(canvas, {

            type: "line",

            data: {

                labels: [
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November"
                ],

                datasets: [{

                    label: "Revenue",

                    data: [
                        12000,
                        15000,
                        13500,
                        19000,
                        17500,
                        22000,
                        24500
                    ],

                    borderColor: "#6C63FF",
                    backgroundColor: "rgba(108, 99, 255, 0.12)",

                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: "#6C63FF"

                }]

            },

            options: {

                responsive: true,
                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    y: {
                        beginAtZero: true,

                        grid: {
                            color: "#F1F5F9"
                        }
                    },

                    x: {
                        grid: {
                            display: false
                        }
                    }

                }

            }

        });

    }


    // ============================
    // VIEW ALL TRANSACTIONS
    // ============================

    const viewAll = document.querySelector(
        ".transactions-card .card-heading a"
    );

    if (viewAll) {

        viewAll.addEventListener("click", function (event) {

            event.preventDefault();

            alert("All transactions will be displayed here.");

        });

    }

})();
