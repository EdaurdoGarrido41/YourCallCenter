import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {LoginUser} from '../../redux/sessionDucks';
import {enableSpinner} from '../../redux/configDucks';
import { useToasts } from 'react-toast-notifications';

const LoginView = () => {
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const {configReducer} = useSelector(store => store);

    const LoginUserLocal = ()=>{
        dispatch(enableSpinner(true));
        dispatch(LoginUser())
        setTimeout(() => {
            dispatch(enableSpinner(false));
        }, 2000);
        addToast("Prueba de mensaje", { appearance: 'success',autoDismiss: true });
        addToast("Prueba de mensaje", { appearance: 'error',autoDismiss: true });
        addToast("Prueba de mensaje", { appearance: 'warning',autoDismiss: true });
        addToast("Prueba de mensaje", { appearance: 'info',autoDismiss: true });
    }

    return(
            <div>

                <div className="col-md-8 col-lg-8 mx-auto">col-8</div>

                <div className="col-sm-12 col-md-4 col-lg-4 mx-auto">
                    <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign In</h5>
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                <label >Email address</label>
                            </div>
                            <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                <label >Password</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" >Remember password</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={()=>LoginUserLocal()}>Sign in</button>
                    </div>
                    </div>
                </div>
            </div>
        
    )
} 
export default LoginView;