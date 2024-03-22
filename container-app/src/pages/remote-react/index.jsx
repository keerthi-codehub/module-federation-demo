import React, { useEffect, useState, lazy } from "react";

const RemoteReact =()=>{
const [RemoteApp, setRemoteApp] = useState('')

useEffect(()=>{
    if (typeof window !== 'undefined') {
    setRemoteApp(lazy(()=>import('remoteReact/App')))
    }
},[])

return <div>
{RemoteApp ? <RemoteApp/> : "Not fount"}
</div> 


}

export default RemoteReact