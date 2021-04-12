
import React , {useEffect}from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  LoginView,HomeView,AboutView,ContactView,
  PayrollReportView,ReportFromAllView,ReportFromView,
  ReportUserView,AddAssistantView,AssistantView,
  DeleteAssistantView,UpdateAssistantView,BreakView,
  CallHistoryView,CallOriginView,CallView,SalesHistoryView,
  SalesManagerView,SalesNameView,SalesNumberView,SalesUserView,
} from './views';
import {useDispatch,useSelector} from 'react-redux';
import { default as configDefault } from '../src/libs/utils/Config';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  const dispatch = useDispatch();
  const {configReducer} = useSelector(store => store);
 
  
  return (
    <ToastProvider>
    <div> 
      {configReducer.spinner && (
        <div className="loader" style={{backgroundColor: configDefault.general.loaderBackground}}>
            <div className="text-center">
                <div className={"spinner-border " + configDefault.general.loaderColor} style={{width: 45, height: 45}} role="status">
                    <span className="sr-only">{configDefault.general.loaderImage}</span>
                </div>
            </div>
        </div>
      )}
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView}/>

          <Route exact path="/login" component={LoginView} />
          <Route exact path="/AboutView" component={AboutView} />
          <Route exact path="/ContactView" component={ContactView} />

          <Route exact path="/PayrollReportView" component={PayrollReportView} />
          <Route exact path="/ReportFromAllView" component={ReportFromAllView} />
          <Route exact path="/ReportFromView" component={ReportFromView} />
          <Route exact path="/ReportUserView" component={ReportUserView} />
          <Route exact path="/AddAssistantView" component={AddAssistantView} />
          <Route exact path="/AssistantView" component={AssistantView} />
          <Route exact path="/DeleteAssistantView" component={DeleteAssistantView} />
          <Route exact path="/UpdateAssistantView" component={UpdateAssistantView} />
          <Route exact path="/BreakView" component={BreakView} />
          <Route exact path="/CallHistoryView" component={CallHistoryView} />
          <Route exact path="/CallOriginView" component={CallOriginView} />
          <Route exact path="/CallView" component={CallView} />
          <Route exact path="/SalesHistoryView" component={SalesHistoryView} />
          <Route exact path="/SalesManagerView" component={SalesManagerView} />
          <Route exact path="/SalesNameView" component={SalesNameView} />
          <Route exact path="/SalesNumberView" component={SalesNumberView} />
          <Route exact path="/SalesUserView" component={SalesUserView} />


        </Switch>
    </Router>
   </div>
   </ToastProvider>
  );
}

export default App;
