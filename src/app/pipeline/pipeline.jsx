import React, { PureComponent } from 'react';
import { PipelineService } from 'api';
import Table from 'components/table';

const columns_meta = {
   header :  ['Kode Proyek', 'Calon Pengguna Jasa', 'Proyek', 
    'Jenis Jasa', 'Potensi Pendapatan (Rp Juta)', 'Deal Probability']
}

const dataDummy = [
    {'fruit': 'Apple', 'cost': 100},
    {'fruit': 'Orange', 'cost': 50},
    {'fruit': 'Banana', 'cost': 35},
    {'fruit': 'Mango', 'cost': 70},
    {'fruit': 'Pineapple', 'cost': 45},
    {'fruit': 'Papaya', 'cost': 40},
    {'fruit': 'Watermelon', 'cost': 35}
  ]

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
                // header={columns_meta.header}
                data={data} />
    }

    render() {
        const {loading, data} = this.state;
        return loading == false && data.length > 0 ? this.renderTable() : this.renderLoading();
    }
}       

export default Pipeline;