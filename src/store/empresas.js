import Vue from 'vue'
import Vuex from 'vuex'
import service from '../services/empresas'
import empresa from '../models/empresas'
import ganancias from '@/models/ganancias'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      service: new service(),
      allEmpresas:[],
      allGanancias:[],
      allLiquidaciones:[],
      allServicios:[]

    },
    mutations:{
        setAllEmpresas(state, payload){
            state.allEmpresas = payload;
        },
        setAllGanancias(state, payload){
          state.allGanancias= payload
         },
         setAllLiquidaciones(state, payload){
           state.allLiquidaciones = payload
         },
         setAllServicios(state, payload){
          state.allServicios = payload
        },
          setLiquidacionesByIdEmpresa(state, payload){
    const { idEmpresa, liquidaciones } = payload;
    state.allLiquidaciones[idEmpresa] = liquidaciones;
  }
    },
  
    actions:{
     
      async getEmpresas({ state, commit }) {
        return new Promise(async (resolve, reject) => {
          try{
              let item = await state.service.getAllEmpresas();
              commit("setAllEmpresas", item );
              resolve(true);
          }
          catch (error) {
            reject(error);
          }
          });
        }
        ,

        async getServicios({ state, commit }) {
          return new Promise(async (resolve, reject) => {
            try{
                let item = await state.service.getAllServicios();
                commit("setAllServicios", item );
                resolve(true);
            }
            catch (error) {
              reject(error);
            }
            });
          },

        async getGanacias({ state, commit }) {
          return new Promise(async (resolve, reject) => {
            try{
                let item = await state.service.getAllGanancias();
                commit("setAllGanancias", item );
                resolve(true);
            }
            catch (error) {
              reject(error);
            }
            });
          },

      
          async getLiquidaciones({ state, commit }) {
            return new Promise(async (resolve, reject) => {
              try{
                  let item = await state.service.getAllLiquidaciones();
                  commit("setAllLiquidaciones", item );
                  resolve(true);
              }
              catch (error) {
                reject(error);
              }
              });
            },

            async getLiquidacionesByIdEmpresa({ state, commit }, idEmpresa) {
              return new Promise(async (resolve, reject) => {
                try{
                  let item = await state.service.getAllLiquidacionesByEmpresa(idEmpresa);
                  commit("setLiquidacionesByIdEmpresa", { idEmpresa, liquidaciones: item });
                  resolve(true);
                }
                catch (error) {
                  reject(error);
                }
              });
            }

     }
    
})