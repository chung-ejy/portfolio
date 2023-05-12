import {
        SET_LOADING, 
        STOP_LOADING, 
        SET_ERROR, 
        SET_TITLE,
        CLEAR_ERROR,
        GET_PRICE,
        GET_SONG
    } from "./types";

import React, { useReducer } from "react";
import DataContext from "./dataContext"
import dataReducer from "./dataReducer"
import axios from "axios"

const DataState = props => {
    const initialState = {
        title: "Longshot",
        price:null,
        song:null,
        error:null,
        loading:false
    }
    const base_url = "http://localhost:8000"
    const [state,dispatch] = useReducer(dataReducer,initialState)

    const setError = (msg,type) => {
        dispatch({
            type:SET_ERROR,
            payload: {msg,type}
        })
    }
    const clearError = () => {
        dispatch({
            type:CLEAR_ERROR
        });
    }

    const setLoading = () => {
        dispatch({
            type:SET_LOADING
        });
    }
    
    const stopLoading = () => {
        dispatch({
            type:STOP_LOADING
        });
    }

    const setTitle = (title) => {
        dispatch({
            type:SET_TITLE,
            payload: title
        });
    }

    const getPrice = async (data) => {
        try {
          setLoading();
          const response = await axios.get(`${base_url}/api/api`, { params: data });
          console.log(response.data)
          dispatch({
            type: GET_PRICE   ,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };
    
    const getSong = async (data) => {
        try {
          setLoading();
          const response = await axios.get(`${base_url}/api/api`, { params: data });
          console.log(response.data)
          dispatch({
            type: GET_SONG   ,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

    

    return (
        <DataContext.Provider value={{
            loading:state.loading,
            error:state.error,
            title:state.title,
            text:state.text,
            price:state.price,
            song:state.song,
            getPrice,
            getSong,
            setTitle,
            clearError,
            setError
        }}>
            {props.children}
        </DataContext.Provider>
    )
}
  
export default DataState;