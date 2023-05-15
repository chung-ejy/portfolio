import {
        SET_LOADING, 
        STOP_LOADING, 
        SET_ERROR, 
        SET_TITLE,
        CLEAR_ERROR,
        GET_PRICE,
        GET_SONG,
        GET_NEWS,
        GET_LOL
    } from "./types";

import React, { useReducer } from "react";
import DataContext from "./dataContext"
import dataReducer from "./dataReducer"
import axios from "axios"

const DataState = props => {
    const initialState = {
        title: "Longshot",
        price:{},
        song:{},
        news:{},
        lol:{},
        error:null,
        loading:false
    }
    const base_url = "https://portfolio-api-qx01.onrender.com"
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

    const getCookie =(name)=> {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }
    const getPrice = (data) => {
        try {
          setLoading();
        axios.post(`${base_url}/api/api`, data).then(res => {
                dispatch({
                type: GET_PRICE   ,
                payload: res.data
                });
            }
          )
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };
    
    const getSong = async (data) => {
        try {
          setLoading();
          const response = await axios.post(`${base_url}/api/api`, data);
          dispatch({
            type: GET_SONG,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const getNews = async (data) => {
        try {
          setLoading();
          const response = await axios.post(`${base_url}/api/api`, data);
          dispatch({
            type: GET_NEWS,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const getLol = async (data) => {
        try {
          setLoading();
          const response = await axios.post(`${base_url}/api/api`, data);
          dispatch({
            type: GET_LOL,
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
            news:state.news,
            lol:state.lol,
            getLol,
            getNews,
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