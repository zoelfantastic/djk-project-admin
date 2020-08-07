import React, { PureComponent } from 'react';
import { PipelineService } from 'api';
import Table from 'app/components/table';

const columns_meta = {
   header :  ['Kode Proyek', 'Calon Pengguna Jasa', 'Proyek', 
    'Jenis Jasa', 'Potensi Pendapatan (Rp Juta)', 'Deal Probability']
}

class Pipeline extends PureComponent {
    constructor(props) {
        super(props);
        this.pipelineService = new PipelineService();
        this.state = {
            data: [],
            loading: false,
            selectedRecordId: undefined,
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        }, () => this.fetchData());
    }

    fetchData = () => {
        this.pipelineService.getDataPipeline().then(result => {
            this.setState({
             data: result,
             loading: false, 
             selectedRecordId: undefined,
            });
        });
    }

    renderLoading = () => {
        return (
            <div className="overlay">
                <i className="fas fa-2x fa-sync-alt"></i>
            </div>
        );
    }

    renderTable = () => {
        const {data} = this.state;
        return <Table 
                header={columns_meta.header}
                data={data} />
    }

    render() {
        const {loading} = this.state;
        let a = [];
        if (loading == false) a.push(this.renderTable);
        if (loading) a.push(this.renderLoading); 
        return(
            {a}
        );
    }
}       

export default Pipeline;