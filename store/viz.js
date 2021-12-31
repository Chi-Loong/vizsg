export const state = () => ({
    categories: [
        { name: "politics, social and culture", icon: "mdi-bullhorn" },
        { name: "health and environment", icon: "mdi-hospital-box" },
        { name: "housing and infrastructure", icon: "mdi-home-city" },
        { name: "education", icon: "mdi-school" },
        { name: "transport", icon: "mdi-car" },
        { name: "sports", icon: "mdi-basketball" },
    ],
    analytictools: [
        {
            name: "Covid Case Clusters",
            category: "health and environment",
            image: "/vizimg/tools/covidsg.jpg",
            description: "Contact tracing Covid Case cluster data visualization, May to June 2021",
            link: "http://covid.viz.sg/",
            lastupdate: "27/06/2021"
        },
        {
            name: "Elections 2020",
            category: "politics, social and culture",
            image: "/vizimg/tools/ge2020.jpg",
            description: "Interactive viz on Singapore's GE2020, compared to GE2015 and GE2011",
            link: "http://elections.viz.sg/",
            blog: "https://www.linkedin.com/pulse/ge2020-live-visualization-aftermath-chi-loong-chan/",
            lastupdate: "10/07/2020"
        },
        {
            name: "Dengue Heatmap",
            category: "health and environment",
            image: "/vizimg/tools/dengue.jpg",
            description: "Live visualization on dengue and zika cases around the island.",
            link: "https://dengue.viz.sg/",
            lastupdate: "28/10/2021",
            live: true
        },
        {
            name: "Subzones: Age + Gender",
            category: "housing and infrastructure",
            image: "/vizimg/tools/age_gender_subdistrict.jpg",
            description: "Detailed sub-district view of population by age and gender, June 2021",
            link: "https://pop.viz.sg/",
            lastupdate: "13/11/2021"
        },
        {
            name: "School Picker",
            category:"education",
            image: "/vizimg/tools/schoolpicker.jpg",
            description: "Sieve through schools based on CCAs and special programmes.",
            link: "https://schoolpicker.sg/",
            blog: "https://blog.data.gov.sg/find-the-right-school-using-our-new-school-picker-tool-3a7250b63390",
            lastupdate: "01/01/2018"
        },    
        {
            name: "SG Taxi Availability",
            category: "transport",
            image: "/vizimg/tools/taxiavailability.jpg",
            description: "Hexbin taxi availabilty viz.",
            link: "https://yongquanben.github.io/sg_taxi_availability/",
            blog: "https://github.com/yongquanben/sg_taxi_availability",
            lastupdate: "01/01/2016"
        },
        {
            name: "The Rat Race",
            category: "education",
            image: "/vizimg/tools/ratrace.jpg",
            description: "What are the pay prospects of your occupation?",
            link: "http://pay.sgcharts.com/",
            lastupdate: "01/01/2020"
        },
        {
            name: "COE Prices",
            category: "transport",
            image: "/vizimg/tools/coeprices.jpg",
            description: "COE prices and quotas visualized since 2002.",
            link: "http://coe.sgcharts.com/",
            lastupdate: "01/01/2020"
        },
        {
            name: "Taxirouter.sg",
            category: "transport",
            image: "/vizimg/tools/taxirouter.jpg",
            description: "Observe live available taxi locations.",
            link: "https://taxirouter.sg/",
            lastupdate: "01/01/2021",
            live: true
        },
        {
            name: "Busrouter.sg",
            category: "transport",
            image: "/vizimg/tools/busrouter.jpg",
            description: "Explore real-time bus route data and arrival times.",
            link: "https://busrouter.sg/",
            lastupdate: "01/01/2021",
            live: true
        },
        {
            name: "SG Property Prices",
            category: "housing and infrastructure",
            image: "/vizimg/tools/vizsgprop.png",
            description: "Understanding property prices in Singapore in 2016",
            link: "https://public.tableau.com/profile/hx.chua#!/vizhome/hackathon_3/Dashboard1",
            lastupdate: "23/10/2016"
        },
        {
            name: "Passport Power Rank",
            category: "politics, social and culture",
            image: "/vizimg/tools/vizpassportsg.png",
            description: "See how Singapore rank against the top ten most powerful passports in the world.",
            link: "https://public.tableau.com/profile/hx.chua#!/vizhome/PassportPowerRank/Top10GlobalPassportPowerRankCountries2017",
            blog: "https://projectosyo.wixsite.com/datadoubleconfirm/single-post/2017/11/30/Top-10-Global-Passport-Power-Rank---Process---Tableau",
            lastupdate: "04/12/2017"
        },
        {
            name: "Track and Field SG",
            category: "sports",
            image: "/vizimg/tools/viztf.png",
            description: "You're not slow (fast) - You're just born in the wrong (right) year. ",
            link: "https://public.tableau.com/profile/hx.chua#!/vizhome/tfresults01/FifteenYearHistory",
            lastupdate: "09/07/2016"
        },
        {
            name: "Outbreak",
            category: "health and environment",
            image: "/vizimg/tools/outbreak.jpg",
            description: "View past and present dengue clusters on an interactive map.",
            link: "http://outbreak.sgcharts.com/",
            lastupdate: "06/11/2020"
        },
        {
            name: "HDB resale prices",
            category: "housing and infrastructure",
            image: "/vizimg/tools/hdb-resale-prices.jpg",
            description: "HDB resale prices by year, town and type.",
            link: "https://hdb-resale-prices.sg/",
            lastupdate: "03/11/2021"
        },
        {
            name: "Olympics and SG sports",
            category: "sports",
            image: "/vizimg/tools/sports_hejun.jpg",
            description: "Tableau compilation on SG sports related datasets.",
            link: "https://public.tableau.com/app/profile/hejun.l",
            lastupdate: "02/09/2021"
        },
        {
            name: "Railrouter.sg",
            category: "transport",
            image: "/vizimg/tools/railrouter.jpg",
            description: "Real-time crowdedness level indicators on MRT/LRT stations.",
            link: "https://railrouter.sg/",
            lastupdate: "09/11/2021",
            live: true
        },
        {
            name: "Check Weather SG",
            category: "health and environment",
            image: "/vizimg/tools/weather.jpg",
            description: "Real-time weather visualization in SG.",
            link: "https://checkweather.sg/",
            lastupdate: "01/01/2021",
            live: true
        },
        {
            name: "Explore Trees SG",
            category: "health and environment",
            image: "/vizimg/tools/trees.jpg",
            description: "Explore heritage and non-heritage trees in SG.",
            link: "https://exploretrees.sg/",
            lastupdate: "01/01/2021",
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
