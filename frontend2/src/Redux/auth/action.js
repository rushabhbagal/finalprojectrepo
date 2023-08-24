import * as types from "./types";

import axios from "axios";

//login user
export const UserLogin = (data) => async (dispatch) => {
  try { debugger;
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const res = await axios.post(
      "http://localhost:8080/users/signin",

     // "https://zany-gray-clam-gear.cyclic.app/Users/login",
      data
    );
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//update doctor forget password
export const forgetPassword = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.FORGET_PASSWORD_REQUEST });
    const res = await axios.post(
      `https://zany-gray-clam-gear.cyclic.app/admin/forgot`,
      data
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// //login user
// export const DoctorLogin = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: types.LOGIN_DOCTOR_REQUEST });
//     const res = await axios.post(
//       "https://zany-gray-clam-gear.cyclic.app/doctors/login",
//       data
//     );
//     console.log(res.data);
//     dispatch({
//       type: types.LOGIN_DOCTOR_SUCCESS,
//       payload: {
//         message: res.data.message,
//         user: res.data.user,
//         token: res.data.token,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     dispatch({
//       type: types.LOGIN_DOCTOR_ERROR,
//       payload: {
//         message: error,
//       },
//     });
//   }
// };

// //login user
// export const AdminLogin = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: types.LOGIN_ADMIN_REQUEST });
//     const res = await axios.post(
//       "https://zany-gray-clam-gear.cyclic.app/admin/login",
//       data
//     );
//     console.log(res.data);
//     dispatch({
//       type: types.LOGIN_ADMIN_SUCCESS,
//       payload: {
//         message: res.data.message,
//         user: res.data.user,
//         token: res.data.token,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     dispatch({
//       type: types.LOGIN_ADMIN_ERROR,
//       payload: {
//         message: error,
//       },
//     });
//   }
// };

// // REGISTER DOCTOR
// export const DoctorRegister = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: types.REGISTER_DOCTOR_REQUEST });
//     const res = await axios.post(
//       "https://zany-gray-clam-gear.cyclic.app/doctors/register",
//       data
//     );
//     // console.log(res);
//     return res.data;
//     // dispatch({
//     //   type: types.REGISTER_DOCTOR_SUCCESS,
//     //   payload: {
//     //     message: res.data.message,
//     //     user: res.data.user,
//     //     // token: res.data.token,
//     //     report: res.data.report,
//     //   },
//     // });
//   } catch (error) {
//     dispatch({
//       type: types.REGISTER_DOCTOR_ERROR,
//       payload: {
//         message: error,
//       },
//     });
//   }
// };

// REGISTER User
export const UserRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_USER_REQUEST });
    const res = await axios.post(
      "http://localhost:8080/users",
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.REGISTER_User_SUCCESS,
    //   payload: {
    //     message: res.data.message,
    //     user: res.data.user,
    //     // token: res.data.token,
    //     report: res.data.report,
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.REGISTER_USER_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//register doctor
export const DocRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_USER_REQUEST });
    const res = await axios.post(
      "http://localhost:8080/doctors/add",
      data
    );
    // console.log(res);
    return res.data;
    // dispatch({
    //   type: types.REGISTER_User_SUCCESS,
    //   payload: {
    //     message: res.data.message,
    //     user: res.data.user,
    //     // token: res.data.token,
    //     report: res.data.report,
    //   },
    // });
  } catch (error) {
    dispatch({
      type: types.REGISTER_USER_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// // REGISTER ADMIN
// export const AdminRegister = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: types.REGISTER_ADMIN_REQUEST });
//     const res = await axios.post(
//       "https://zany-gray-clam-gear.cyclic.app/admin/register",
//       data
//     );
//     // console.log(res);
//     return res.data;
//     // dispatch({
//     //   type: types.REGISTER_ADMIN_SUCCESS,
//     //   payload: {
//     //     message: res.data.message,
//     //     user: res.data.user,
//     //     // token: res.data.token,
//     //     report: res.data.report,
//     //   },
//     // });
//   } catch (error) {
//     dispatch({
//       type: types.REGISTER_ADMIN_ERROR,
//       payload: {
//         message: error,
//       },
//     });
//   }
// };

// // REGISTER AMBULANCE
// export const AmbulanceRegister = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: types.REGISTER_AMBULANCE_REQUEST });
//     const res = await axios.post(
//       "https://zany-gray-clam-gear.cyclic.app/ambulances/add",
//       data
//     );
//     console.log(res);
//     // dispatch({
//     //   type: types.REGISTER_AMBULANCE_SUCCESS,
//     //   payload: {
//     //     message: res.data.message,
//     //     user: res.data.user,
//     //     // token: res.data.token,
//     //     report: res.data.report,
//     //   },
//     // });
//   } catch (error) {
//     dispatch({
//       type: types.REGISTER_AMBULANCE_ERROR,
//       payload: {
//         message: error,
//       },
//     });
//   }
// };

// // logout user
// export const authLogout = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: types.AUTH_LOGOUT,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //update User
// export const UpdateUser = (data, id) => async (dispatch) => {
//   try {
//     dispatch({ type: types.EDIT_User_REQUEST });
//     const res = await axios.patch(
//       `https://zany-gray-clam-gear.cyclic.app/Users/${id}`,
//       data
//     );
//     console.log(res);
//     dispatch({ type: types.EDIT_User_SUCCESS, payload: res.data.user });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //update doctor
// export const UpdateDoctor = (data, id) => async (dispatch) => {
//   try {
//     dispatch({ type: types.EDIT_DOCTOR_REQUEST });
//     const res = await axios.patch(
//       `https://zany-gray-clam-gear.cyclic.app/doctors/${id}`,
//       data
//     );
//     console.log(res);
//     dispatch({ type: types.EDIT_DOCTOR_SUCCESS, payload: res.data.user });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //update doctor
// // export const SendPassword = (data) => async (dispatch) => {
// //   try {
// //     dispatch({ type: types.EDIT_DOCTOR_REQUEST });
// //     const res = await axios.post(
// //       `https://zany-gray-clam-gear.cyclic.app/admin/password`,
// //       data
// //     );
// //     // console.log(res);
// //     return res.data;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };


