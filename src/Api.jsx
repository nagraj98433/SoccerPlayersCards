import { React, useEffect, useState } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SearchField from './SearchField'

function Api() {
  let [mydata, setmydata] = useState([])
  let [UserVal, setUserVal] = useState('')


  // using promises
  useEffect(() => {
    axios.get('https://api.npoint.io/20c1afef1661881ddc9c').then((res) => {
      // console.log(res.data)
      setmydata((oldval) => {
        return [res.data]
      })
    })
  }, [])

  let UserInput = (event) => {
    let val = event.target.value.toUpperCase()
    setUserVal(val)
  }




  // console.log(mydata)
  // mydata.map((val) => {
  //   return console.log(val.playerList.map((val, b, g) => {
  //     return console.log(val.TName.toUpperCase().indexOf(UserVal))
  //   }))
  // })


  return (
    <>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <SearchField user_Input={UserInput} />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center px-3'>
          {mydata.map((val) => {
            return val.playerList.map((oldVal, ind) => {
              return (oldVal.PFName.toUpperCase().indexOf(UserVal) > -1) || (oldVal.TName.toUpperCase().indexOf(UserVal) > -1) ?
                <div className='col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-5' key={ind} >
                  <div className="card grow">
                    {/* <img src={`./img/${oldVal.Id}.jpg`} alt="players" className="card-img-top" /> */}
                    <img src={require(`../src/img/${oldVal.Id}.jpg`)} alt="players" className="card-img-top" />
                    <div className="card-body bg-dark text-secondary">
                      <h6 className="card-title"><small>{`Name : ${oldVal.PFName}`}</small></h6>
                      <h6><small>{`Skill : ${oldVal.SkillDesc}`}</small></h6>
                      <h6><small>{`$$ : ${oldVal.Value}`}</small></h6>
                      <h6><small>{`Upcoming Match : ${oldVal.UpComingMatchesList.map((val) => { return `${val.CCode} vs ${val.VsCCode}` })}`}</small></h6>
                      <h6><small>{`Next Match Date : ${oldVal.UpComingMatchesList.map(() => { return `${new Date().toDateString()}   ${new Date().toLocaleTimeString()}` })}`}</small></h6>
                    </div>
                  </div>
                </div> : null
            })
          })}
        </div>

        {/* {teamsList: Array(32), playerList: Array(50)} {`${oldVal.Id}.jpg`}  './img/63706.jpg'*/}

        {/* {mydata.teamsList.map((val)=>{})} */}

      </div>
    </>
  )
}

export default Api
