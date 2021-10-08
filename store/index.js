export const state = () => ({
    PSI: [],
    countValue: 1000,
    categories: [
        { name: "politics", icon: "mdi-city" },
        { name: "economy", icon: "mdi-currency-usd" },
        { name: "demographics", icon: "mdi-human-handsdown" },
        { name: "health", icon: "mdi-hospital-box" },
        { name: "test1", icon: "mdi-rocket" },
        { name: "test2", icon: "mdi-rocket" },
        { name: "test3", icon: "mdi-rocket" }
    ],
    visualizations: [
        {
            name: "Elections 2020",
            category: "politics",
            image: "/img/ge2020.jpg",
            description: "Interactive viz on Singapore's GE2020, compared to GE2015 and GE2011",
            link: "http://elections.viz.sg/",
            blog: "https://www.linkedin.com/pulse/ge2020-live-visualization-aftermath-chi-loong-chan/"
        },
        {
            name: "Budget 2020",
            category: "economy",
            image: "/img/budget2020.jpg",
            description: "2020 Singapore Budget (May 2020)",
            link: "viz/budget2020/",
            blog: "https://www.linkedin.com/pulse/2020-sg-fortitude-budget-visualized-chi-loong-chan/"
        },
        {
            name: "Subzones: Age + Gender",
            category: "demographics",
            image: "/img/age_gender_subdistrict.jpg",
            description: "Detailed subzone view of population by age and gender 2011 to 2017.",
            link: "viz/map_age_gender/",
            blog: "http://www.vslashr.com/2016/05/population-by-age-and-gender/"
        },
        {
            name: "Dengue + Zika Heatmap",
            category: "health",
            image: "/img/dengue.jpg",
            description: "Live visualization on dengue and zika cases around the island.",
            link: "viz/dengue/",
            blog: "http://www.vslashr.com/2013/06/singapore-dengue-clustering-heatmap/"
        },
        {
            name: "Subzones: Housing (2016)",
            category: "demographics",
            image: "/img/housing_subdistrict.jpg",
            description: "Detailed sub-district view of population by housing types in 2016.",
            link: "viz/map_housing/",
            blog: "http://www.vslashr.com/2016/11/population-by-housing/"
        },
        {
            name: "Elections 2020A",
            category: "politics",
            image: "/img/ge2020.jpg",
            description: "Interactive viz on Singapore's GE2020, compared to GE2015 and GE2011",
            link: "http://elections.viz.sg/",
            blog: "https://www.linkedin.com/pulse/ge2020-live-visualization-aftermath-chi-loong-chan/"
        },
        {
            name: "Budget 2020A",
            category: "economy",
            image: "/img/budget2020.jpg",
            description: "2020 Singapore Budget (May 2020)",
            link: "viz/budget2020/",
            blog: "https://www.linkedin.com/pulse/2020-sg-fortitude-budget-visualized-chi-loong-chan/"
        },
        {
            name: "Subzones: Age + GenderA",
            category: "demographics",
            image: "/img/age_gender_subdistrict.jpg",
            description: "Detailed subzone view of population by age and gender 2011 to 2017.",
            link: "viz/map_age_gender/",
            blog: "http://www.vslashr.com/2016/05/population-by-age-and-gender/"
        },
        {
            name: "Dengue + Zika HeatmapA",
            category: "health",
            image: "/img/dengue.jpg",
            description: "Live visualization on dengue and zika cases around the island.",
            link: "viz/dengue/",
            blog: "http://www.vslashr.com/2013/06/singapore-dengue-clustering-heatmap/"
        },
        {
            name: "Subzones: Housing (2016)A",
            category: "demographics",
            image: "/img/housing_subdistrict.jpg",
            description: "Detailed sub-district view of population by housing types in 2016.",
            link: "viz/map_housing/",
            blog: "http://www.vslashr.com/2016/11/population-by-housing/"
        }
    ]
})

export const getters = {

}

export const actions = {
    async getPSI({ commit }) {
        const PSI = await this.$axios.get("https://api.data.gov.sg/v1/environment/psi");
        commit("addPSI", PSI)
        console.log(PSI);
    }

}

export const mutations = {
    increment(state) {
        state.countValue++;
    },
    addPSI(state, PSIdata) {
        const data = PSIdata.data.items[0].readings;
        console.log(data);
        
        let PSI2 = [];

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let obj = {};                
                obj = data[key];
                obj.metric = key;
                PSI2.push(obj);
            }
        }

        state.PSI = PSI2;
    }
}
