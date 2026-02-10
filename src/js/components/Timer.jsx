import React from "react";
import { Digit } from "./Digit";

export const Timer = ({count}) => {
    return(
            <div className="container-fluid bg-dark">
                <div className="row pt-2 pb-2">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <Digit value={Math.floor(count % 100000 / 10000)} />
                    </div>
                    <div className="col-2">
                        <Digit value={Math.floor(count % 10000 / 1000)} />
                    </div>
                    <div className="col-2">
                        <Digit value={Math.floor(count % 1000 / 100)} />
                    </div>
                    <div className="col-2">
                        <Digit value={Math.floor(count % 100 / 10)} />
                    </div>
                    <div className="col-2">
                        <Digit value={Math.floor(count % 10)} />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
    )
}