import React from "react";

export default function withDataFetching(WrappedComponent)
{
class WithDataFetching extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[], 
            loading: true,
            error:''
        };
    }
    async componentDidMount(){
        try {
            const data =await fetch(this.props.dataSource);
            const dataJSON = await data.json();

            if(dataJSON){
                this.setState({
                    loading: false,
                    data: dataJSON
                });
            }
        
            }catch(err){
                this.setState({
                    loading: false,
                    error: err.message,
                });
            }
        }
        render(){
            const {data, loading,error}=this.state;
            return (
                <WrappedComponent>
                    data={data}
                    loading={loading}
                    error={error}
                    {this.props}
                </WrappedComponent>
            );
        }

    }
    WithDataFetching.displayName =`WithDataFetching(${WrappedComponent.name})`;

    return WithDataFetching;
}
