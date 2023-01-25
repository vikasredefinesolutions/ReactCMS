
const Puchout = ({data} : any) => {

    return (<>
        <h1>Puchout</h1>
        <span>{JSON.stringify(data)}</span>
    </>
    )
}

export default Puchout

export const getServerSideProps   = async (context : any ) => {
    return {
        props : {
            data : {body : {...context.req.body},
            headers: {...context.req.headers}}
        }
    }
}
