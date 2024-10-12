import React from "react"

export function Cung({data}) {
    return (
        <div className={data["thien_ban"]["dia_chi"]}>
            <span> {data["thien_ban"]["dia_chi"]}</span>
        </div>
    )
}