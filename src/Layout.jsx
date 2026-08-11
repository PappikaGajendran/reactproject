import React from 'react'
import Sidebar from './Sidebar'
import AllNotes from './AllNotes'
import Studies from './Settings'
import Work from './Work'
import Personal from './Profile'
function Layout() {
    const [Active, setActive] = React.useState("All Notes")
    return (
        <div className="flex">
             <Sidebar active={Active} setActive={setActive}/>
             <div className="main ml-[28%] flex-1 p-7">
             {Active === "All Notes" && <AllNotes/>}
             {Active === "Studies" && <Studies/>}
             {Active === "Work" && <Work/>}
             {Active === "Personal" && <Personal/>}
            </div>
            </div>
    )
}
export default Layout
