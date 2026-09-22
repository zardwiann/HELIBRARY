
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
 
import Banner from './Page1/banner';
import NavigationBar from './Page1/Navigationbar';
import About from './Page1/aboutus';
import LibraryCategory from './Page2/LibraryNavigationBar';
import Technology from './Page2/Technology';
 
import LandingPageCategory from './Page2/Libraylanding';
import LoginPage from './LogIn/loginpage';
import IntroductionToComputing from './Page2/IntroductionToComputing';
import ComputerProgramming from './Page2/ComputerProgramming';
import DataStructuresAlgorithms from './Page2/DataStructuresAlgorithms';
import NetworkingAdministration from './Page2/NetworkingAdministration';
import ProfessionalIssuesComputing from './Page2/ProfessionalIssuesComputing';
import InformationManagement from './Page2/InformationManagement';
import ProjectManagement from './Page2/ProjectManagement';
import ISStrategyManagement from './Page2/ISStrategyManagement';
import OrganizationManagement from './Page2/OrganizationManagement';
import FinancialManagement from './Page2/FinancialManagement';
import BusinessProcessManagement from './Page2/BusinessProcessManagement';
import BusinessPerformance from './Page2/BusinessPerformance';
import QuantitativeMethods from './Page2/QuantitativeMethods';
import CustomerRelationshipManagement from './Page2/CustomerRelationshipManagement';
import EnterpriseResourcePlanning from './Page2/EnterpriseResourcePlanning';
import DataMining from './Page2/DataMining';
import HumanComputerInteraction from './Page2/HumanComputerInteraction';
import ITGovernanceQualityManagement from './Page2/ITGovernanceQualityManagement';
import BusinessIntelligenceSystems from './Page2/BusinessIntelligenceSystems';
import InformationAssuranceSecurity from './Page2/InformationAssuranceSecurity';
import UIUXDesigningPrototyping from './Page2/UIUXDesigningPrototyping';
import ECommerceDigitalBusiness from './Page2/ECommerceDigitalBusiness';
import CloudBasedInformationSystems from './Page2/CloudBasedInformationSystems';
 
import Tutorial from './data/tutorial';

function App() {

  return (

    <BrowserRouter>

      <NavigationBar />
      <Routes>

        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/about" element={<About />} />

        <Route path="/home" element={<Banner />}>
          <Route index element={<Banner />} />
        </Route>
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/library" element={<LibraryCategory />}>
          <Route index element={<LandingPageCategory />} />
        </Route>
        <Route path="technology" element={<Technology />} />

        <Route path="/login" element={<LoginPage />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route
          path="/introduction-to-computing"
          element={<IntroductionToComputing />}
        />

        <Route
          path="/computer-programming-1"
          element={<ComputerProgramming />}
        />

        <Route
          path="/data-structures-and-algorithms"
          element={<DataStructuresAlgorithms />}
        />

        <Route
          path="/networking-administration"
          element={<NetworkingAdministration />}
        />

        <Route
          path="/professional-issues-in-computing"
          element={<ProfessionalIssuesComputing />}
        />

        <Route
          path="/information-management-1"
          element={<InformationManagement />}
        />

        <Route
          path="/project-management"
          element={<ProjectManagement />}
        />

        <Route
          path="/is-strategy-management"
          element={<ISStrategyManagement />}
        />

        <Route
          path="/organization-management"
          element={<OrganizationManagement />}
        />

        <Route
          path="/financial-management"
          element={<FinancialManagement />}
        />

        <Route
          path="/business-process-management"
          element={<BusinessProcessManagement />}
        />

        <Route
          path="/business-performance"
          element={<BusinessPerformance />}
        />

        <Route
          path="/quantitative-methods"
          element={<QuantitativeMethods />}
        />

        <Route
          path="/customer-relationship-management"
          element={<CustomerRelationshipManagement />}
        />

        <Route
          path="/enterprise-resource-planning"
          element={<EnterpriseResourcePlanning />}
        />

        <Route
          path="/data-mining"
          element={<DataMining />}
        />

        <Route
          path="/human-computer-interaction"
          element={<HumanComputerInteraction />}
        />

        <Route
          path="/it-governance-quality-management"
          element={<ITGovernanceQualityManagement />}
        />

        <Route
          path="/business-intelligence-systems"
          element={<BusinessIntelligenceSystems />}
        />

        <Route
          path="/information-assurance-security"
          element={<InformationAssuranceSecurity />}
        />

        <Route
          path="/ui-ux-designing-prototyping"
          element={<UIUXDesigningPrototyping />}
        />

        <Route
          path="/e-commerce-digital-business"
          element={<ECommerceDigitalBusiness />}
        />

        <Route
          path="/cloud-based-information-systems"
          element={<CloudBasedInformationSystems />}
        />



      </Routes>



    </BrowserRouter>
  );
}
export default App;
