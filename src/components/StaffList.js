import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import RenderStaff from './StaffDetail';
class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffSelected: null,
    };
    this.handleStaffSelected = this.handleStaffSelected.bind(this);
  }

  handleStaffSelected(staff) {
    this.setState({ staffSelected: staff });
  }

  render() {
    console.log(this.state.staffSelected);
    const staffList = this.props.staffs.map(staff => {
      return (
        <div key={staff.id} className='col-lg-4 col-md-5 mt-1'>
          <Card
            onClick={() => {
              this.handleStaffSelected(staff);
            }}
          >
            <CardBody>
              <CardImg src={staff.image} alt={staff.name} />
              <CardTitle className='text-center mt-4'>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row mt-3'>
          <h5>Bấm vào ảnh hoặc tên nhân viên để xem thông tin</h5>
        </div>
        <div className='row'>{staffList}</div>
        <RenderStaff staff={this.state.staffSelected} />
      </div>
    );
  }
}

export default StaffList;
