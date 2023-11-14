import  {homePage}  from "../page/menu_and_page_load_spec"
import urls from "../fixtures/urls.json"
const homePageObj = new homePage()

describe('Top menu items and page loading', () => {
    const viewportHeight=1100
    const viewportWidth=750
    const PageMenuItems=["Industries","Outcomes","Locations","Insights","Careers","ESG","Why ResultsCX"]

    beforeEach(() => {

        //view the page in specific Height and width
        cy.viewport(viewportHeight,viewportWidth)

        //URL can be set in cypress.config.js for different environments
        cy.visit(urls.URL);
    })

        it('Top Menu itmes ', () => {
            PageMenuItems.forEach(Item => {
                homePageObj.TopMenuItems(Item)
            });
        })
        it('Page Loading Check - Industries',()=>{
            homePageObj.PageLoadIndustries()
        })

        it('Page Loading Check - Outcomes',()=>{    
            homePageObj.PageLoadOutcomes()  
        })
        
        it('Page Loading Check - Insights',()=>{
            homePageObj.PageLoadInsights()
        })

        it('Page Loading Check - Locations',()=>{
            homePageObj.PageLoadLocations()
         })
    
        it('Page Loading Check - Careers',()=>{
            homePageObj.PageLoadCareers()
        })

        it('Page Loading Check - ESG',()=>{
            homePageObj.PageLoadESG()
        })
        
        it('Page Loading Check - Why ResultsCX',()=>{
        homePageObj.PageLoadWhyResultsCX()
        })

    /* after("All page items loaded",()=>{
        cy.viewport(viewportHeight,viewportWidth)
        cy.visit(URL);
     })*/

})