import { PunchoutPostApi } from "@services/punchout.service";

const Puchout = ({req,res,punchout} : any) => {

    return (
        <>
            <h1>Request Stream</h1>
            <span>{JSON.stringify(req?.data)}</span>
            <h1>Response Stream</h1>
            <span>{JSON.stringify(res?.data)}</span>
            <h1>Punchout Api</h1>
            <span>{JSON.stringify(punchout)}</span>

        </>
    )
}

export default Puchout;

export const getServerSideProps   = async (context : any ) => {
    const res = await PunchoutPostApi();
    return {
        props : {
            req : {
            data : {body : {...context.req.body},
            headers: {...context.req.headers}}
            },
            res : {
                data : {body : {...context.res.body},
                headers: {...context.res.headers}}
            },
            punchout : res
        }
    }
}
