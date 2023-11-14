import locators from "../selectors/locators.css"
import urls from "../fixtures/urls.json"
export class homePage {

    TopMenuItems(Item) {

        //To verify menu items present or not
        cy.get(locators[Item]).contains(Item).should("be.visible")


       // To verify menu items on mouseover respective section is loaded or not
       //cy.get(locators[Item]).invoke('show').contains(Item).trigger('mouseover').click()
    } 

     PageLoadInsights(){

            
            cy.xpath(locators.BeforeLoadWhyResultsCX).should('not.be.visible')

            //invoke('show') and trigger are methods used for interacting with Insights text
            cy.get(locators.Insights).invoke('show').contains("Insights").trigger('mouseover').click()

            //Verify Insights selector has text as expected
            cy.xpath(locators.InsightsMessage).contains("Stay informed. Stay ahead.")

            //As Insights page is not directly accessible trigger one of its hidden elements (ASSUMING THIS IS THE EXPECTED BEHAVIOUR). 
            // Verify page loaded has correct URL
            cy.xpath(locators.InsightsURL).click({force:true}).url().should('eq', urls.Insights) 

            //Scroll To bottom of the page to verify 'Insights' text is highlighted with green color (To verify Particular Page is loaded)
            cy.scrollTo("bottom");
            cy.xpath(locators.Bottom_Insights).contains("Insights").should('have.css', 'color', 'rgb(98, 187, 70)')
    }

    PageLoadCareers(){
     
        cy.xpath(locators.Careers_finder).should('not.be.visible')

        //invoke('show') and trigger are methods used for interacting with Careers text
        cy.get(locators.Careers).invoke('show').contains("Careers").trigger('mouseover').click()

        //Verify Careers selector has text as expected
        cy.xpath(locators.Careers_finder).should("contain.text","Experience new world of work")

       //As Careers page is not accessible directly trigger one of its hidden elements (ASSUMING THIS IS THE EXPECTED BEHAVIOUR)
        cy.xpath(locators.Careers_page).contains("Life @ ResultsCX").invoke('show').click({force:true})

       //To  Verify page loaded has correct URL
        cy.url().should('eq', urls.Careers) 

        //Verify Careers selector has text as expected
        cy.xpath(locators.Careers_message).should("contain.text","Shape the future of CX, find your GREATER")

        //Scroll To bottom of the page to verify 'Careers' text is highlighted with green color (To verify Particular Page is loaded)
        cy.scrollTo("bottom");
        cy.xpath(locators.Bottom_Careers).contains("Careers").should('have.css', 'color', 'rgb(98, 187, 70)')
    }


    PageLoadESG(){
        //As ESG page is accessible directly Get locator of ESG and click 
        cy.get(locators.ESG).contains("ESG").click()

        //Verfify url of ESG page
        cy.url().should('eq', urls.ESG) 

        //Scroll To bottom of the page to verify 'ESG' text is highlighted with green color (To verify Particular Page is loaded)
        cy.scrollTo("bottom");
        cy.xpath(locators.Bottom_ESG).contains("ESG").should('have.css', 'color', 'rgb(98, 187, 70)')
    }

    PageLoadIndustries(){
        cy.xpath(locators.IndustrieFloatDiv).should('not.be.visible')

        //As industries page is not available directly trigger one of its hidden element to load particular page i.e "Healthcare" (ASSUMING THIS IS THE EXPECTED BEHAVIOUR)
        cy.get(locators.Industries).contains("Industries").trigger('mouseover').click()
        cy.xpath(locators.HealthCare).contains("Healthcare").invoke('show').click({force:true})

        //Verfify healthcare page url" 
        cy.url().should('eq', urls.healthcareIndustries) 

        //Verfify healthcare page has text "Explore our Services" 
        cy.xpath(locators.Industrie_message).should("contain.text","Explore our Services")
    }

    PageLoadLocations()
    {
        //As Locations page is not available directly, trigger/click one of its hidden element i.e United States (ASSUMING THIS IS THE EXPECTED BEHAVIOUR)
        cy.xpath(locators.LocationFloatDiv).should('not.be.visible')
        cy.xpath(locators.LocationX).contains("Locations").trigger('mouseover').click()
        cy.xpath(locators.Location_US).contains("United States").invoke('show').click({force:true})

        //To verify url
        cy.url().should('eq', urls.LocationsUSA) 

         //To verify text on hidden selector
        cy.xpath(locators.LocationMessage).should("contain.text","Discover our global network locations")
    }

    PageLoadWhyResultsCX(){

        //As 'Why ResultsCX' page is not available directly, trigger/click one of its hidden element i.e "About us" (ASSUMING THIS IS THE EXPECTED BEHAVIOUR)
        cy.xpath(locators.BeforeLoadWhyResultsCX).should('not.be.visible')
        cy.get(locators["Why ResultsCX"]).invoke('show').contains("Why ResultsCX").trigger('mouseover').click()

        //To verify text on hidden selector
        cy.xpath(locators.WhyResultx).contains("The ResultsCX difference")

        //To verify url
        cy.xpath(locators.About_Us).click().url('eq',urls["About us"])
        
    }

    PageLoadOutcomes(){

        //As Outcomes page is not available directly, trigger/click one of its hidden element i.e "Business Outcomes" (ASSUMING THIS IS THE EXPECTED BEHAVIOUR)
        cy.xpath(locators.OutcomeMessage).should('not.be.visible')
        cy.get(locators.Outcomes).invoke('show').contains("Outcomes").trigger('mouseover').click()
        cy.xpath(locators.OutcomeMessage).contains("Helping you drive competitive advantage")

        //To verify url and text on hidden element
        cy.xpath(locators.BuisnessOutcomeUrl).click({force:true})
          .should("contain.text","Business Outcomes")
          .url('eq','https://resultscx.com/business-outcome/')
    }


}