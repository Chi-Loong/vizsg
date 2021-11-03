export const state = () => ({
    categories: [
        { name: "politics, social and culture", icon: "mdi-bullhorn" },
        { name: "economy and finance", icon: "mdi-currency-usd" },
        { name: "health and environment", icon: "mdi-hospital-box" },
        { name: "housing and infrastructure", icon: "mdi-home-city" },
        { name: "education", icon: "mdi-school" },
        { name: "transport", icon: "mdi-car" }
    ],
    visualizations: [
        {
            name: "Covid Case Clusters",
            category: "health and environment",
            image: "/vizimg/covidsg.jpg",
            description: "Contact tracing Covid Case cluster data visualization, May to June 2021",
            link: "http://covid.viz.sg/",
            lastupdate: "27/06/2021"
        },
        {
            name: "Elections 2020",
            category: "politics, social and culture",
            image: "/vizimg/ge2020.jpg",
            description: "Interactive viz on Singapore's GE2020, compared to GE2015 and GE2011",
            link: "http://elections.viz.sg/",
            blog: "https://www.linkedin.com/pulse/ge2020-live-visualization-aftermath-chi-loong-chan/",
            lastupdate: "10/07/2020"
        },
        {
            name: "Budget 2020",
            category: "economy and finance",
            image: "/vizimg/budget2020.jpg",
            description: "2020 Singapore Budget (May 2020)",
            link: "https://budget.viz.sg/app/budget2020/",
            blog: "https://www.linkedin.com/pulse/2020-sg-fortitude-budget-visualized-chi-loong-chan/",
            lastupdate: "17/05/2020"
        },
        {
            name: "Subzones: Age + Gender",
            category: "housing and infrastructure",
            image: "/vizimg/age_gender_subdistrict.jpg",
            description: "Detailed subzone view of population by age and gender 2011 to 2017.",
            link: "https://pop.viz.sg/app/map_age_gender/",
            blog: "http://www.vslashr.com/2016/05/population-by-age-and-gender/",
            lastupdate: "01/01/2017"
        },
        {
            name: "Dengue Heatmap",
            category: "health and environment",
            image: "/vizimg/dengue.jpg",
            description: "Live visualization on dengue and zika cases around the island.",
            link: "https://dengue.viz.sg/",
            blog: "http://www.vslashr.com/2013/06/singapore-dengue-clustering-heatmap/",
            lastupdate: "28/10/2021",
            live: true
        },
        {
            name: "Subzones: Housing",
            category: "housing and infrastructure",
            image: "/vizimg/housing_subdistrict.jpg",
            description: "Detailed sub-district view of population by housing types in 2016.",
            link: "https://pop.viz.sg/app/map_housing/",
            blog: "http://www.vslashr.com/2016/11/population-by-housing/",
            lastupdate: "01/01/2017"
        },
        {
            name: "School Picker",
            category:"education",
            image: "/vizimg/schoolpicker.jpg",
            description: "Sieve through schools based on CCAs and special programmes.",
            link: "https://schoolpicker.sg/",
            blog: "https://blog.data.gov.sg/find-the-right-school-using-our-new-school-picker-tool-3a7250b63390",
            lastupdate: "01/01/2018"
        },    
        {
            name: "SG Taxi Availability",
            category: "transport",
            image: "/vizimg/taxiavailability.jpg",
            description: "Hexbin taxi availabilty viz.",
            link: "https://yongquanben.github.io/sg_taxi_availability/",
            blog: "https://github.com/yongquanben/sg_taxi_availability",
            lastupdate: "01/01/2016"
        },
        {
            name: "The Rat Race",
            category: "education",
            image: "/vizimg/ratrace.jpg",
            description: "What are the pay prospects of your occupation?",
            link: "http://pay.sgcharts.com/",
            lastupdate: "01/01/2020"
        },
        {
            name: "COE Prices",
            category: "transport",
            image: "/vizimg/coeprices.jpg",
            description: "COE prices and quotas visualized since 2002.",
            link: "http://coe.sgcharts.com/",
            lastupdate: "01/01/2020"
        },
        {
            name: "Taxirouter.sg",
            category: "transport",
            image: "/vizimg/taxirouter.jpg",
            description: "Observe live available taxi locations.",
            link: "https://taxirouter.sg/",
            lastupdate: "01/01/2021",
            live: true
        },
        {
            name: "Busrouter.sg",
            category: "transport",
            image: "/vizimg/busrouter.jpg",
            description: "Explore real-time bus route data and arrival times.",
            link: "https://busrouter.sg/",
            lastupdate: "01/01/2021",
            live: true
        },
        {
            name: "SG Property Prices",
            category: "housing and infrastructure",
            image: "/vizimg/vizsgprop.png",
            description: "Understanding property prices in Singapore in 2016",
            link: "https://public.tableau.com/profile/hx.chua#!/vizhome/hackathon_3/Dashboard1",
            lastupdate: "23/10/2016"
        },
        {
            name: "Passport Power Rank",
            category: "politics, social and culture",
            image: "/vizimg/vizpassportsg.png",
            description: "See how Singapore rank against the top ten most powerful passports in the world.",
            link: "https://public.tableau.com/profile/hx.chua#!/vizhome/PassportPowerRank/Top10GlobalPassportPowerRankCountries2017",
            blog: "https://projectosyo.wixsite.com/datadoubleconfirm/single-post/2017/11/30/Top-10-Global-Passport-Power-Rank---Process---Tableau",
            lastupdate: "04/12/2017"
        },
        {
            name: "Track and Field SG",
            category: "education",
            image: "/vizimg/viztf.png",
            description: "You're not slow (fast) - You're just born in the wrong (right) year. ",
            link: "https://public.tableau.com/profile/hx.chua#!/vizhome/tfresults01/FifteenYearHistory",
            lastupdate: "09/07/2016"
        },
        {
            name: "Outbreak",
            category: "health and environment",
            image: "/vizimg/outbreak.jpg",
            description: "View past and present dengue clusters on an interactive map.",
            link: "http://outbreak.sgcharts.com/",
            lastupdate: "06/11/2020"
        },
        {
            name: "HDB resale prices",
            category: "housing and infrastructure",
            image: "/vizimg/hdb-resale-prices.jpg",
            description: "HDB resale prices by year, town and type.",
            link: "https://hdb-resale-prices.sg/",
            lastupdate: "03/11/2021",
            live: true
        }    
    ]
})

export const getters = {

}

export const actions = {

}

export const mutations = {

}
