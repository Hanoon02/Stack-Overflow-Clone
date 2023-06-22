import React, {useState} from "react";

export default function Auth(){
    const [isSignup, setIsSignup] = useState(false);

    return(
        <div className={'grid h-[500px] place-content-center'}>
            <div>
                <p>Join the Stack Overflow Community</p>
                <p>Get unstuck -- ask a question</p>
                <p>Unlock</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div>
                <div className={'font-semibold'}>
                    <p>Display Name</p>
                    <input className={'border border-black'} type="text"/>
                </div>
                <div className={'font-semibold'}>
                    <p>Email</p>
                    <input className={'border border-black'} type="text"/>
                </div>
                <div className={'font-semibold'}>
                    <p>Password</p>
                    <input className={'border border-black'} type="text"/>
                </div>
                <p>
                    Password must contain atleast eight characters,
                    including atleast 1 letter and 1 number
                </p>
            </div>
        </div>
    )
}