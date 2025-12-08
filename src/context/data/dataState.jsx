import {
        SET_LOADING, 
        STOP_LOADING, 
        SET_ERROR, 
        SET_TITLE,
        CLEAR_ERROR,
        GET_PRICE,
        GET_SONG,
        GET_NEWS,
        GET_LOL,
        GET_BLOGS,
        GET_VISUALIZATION,
        GET_TRADES,
        POST_FEEDBACK,
        GET_CHAT
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
        chat:{},
        blogs:[],
        trades:[],
        visualization:[],
        feedback:{},
        error:null,
        loading:false
    }
    // const base_url = "https://portfolio-api-qx01.onrender.com"
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
        axios.post(`${base_url}/api/api`, data,{"headers": {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'), 
        }}).then(res => {
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
          const response = await axios.post(`${base_url}/api/api`, data,{"headers": {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), 
          }});
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
          const response = await axios.post(`${base_url}/api/api`, data,{"headers": {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), 
          }});
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
          const response = await axios.post(`${base_url}/api/api`, data,{"headers": {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), 
          }});
          dispatch({
            type: GET_LOL,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const getChat = async (data) => {
        try {
          setLoading();
          const response = await axios.post(`${base_url}/api/api`, data,{"headers": {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), 
          }});
          dispatch({
            type: GET_CHAT,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const postFeedback = async (data) => {
        try {
          setLoading();
          const response = await axios.post(`${base_url}/api/api`, data);
          dispatch({
            type: POST_FEEDBACK,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const getBlogs = async () => {
        try {
          setLoading();
          const response = await axios.get(`${base_url}/api/api`);
          dispatch({
            type: GET_BLOGS,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const getTrades = async (strategy_name) => {
        try {
          setLoading();
          const response = await axios.get(`${base_url}/api/api/trades`, {
            params: {
                strategy_name: strategy_name
            }
        });
        ;
          dispatch({
            type: GET_TRADES,
            payload: response.data
          });
        } catch (err) {
          stopLoading();
          setError(err.message, "danger");
        }
      };

      const getVisualization = async (strategy_name) => {
        try {
          setLoading();
          const response = await axios.get(`${base_url}/api/api/visualization`,{
            params: {
                strategy_name: strategy_name
            }
        });
          dispatch({
            type: GET_VISUALIZATION,
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
            feedback:state.feedback,
            blogs:state.blogs,
            trades:state.trades,
            chat:state.chat,
            visualization:state.visualization,
            getChat,
            getBlogs,
            postFeedback,
            getLol,
            getNews,
            getPrice,
            getSong,
            getTrades,
            getVisualization,
            setTitle,
            clearError,
            setError
        }}>
            {props.children}
        </DataContext.Provider>
    )
}
  
export default DataState;