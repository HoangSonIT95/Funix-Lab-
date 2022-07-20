import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import RenderStaff from './StaffDetail';
class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffSelected: null,
      colNumSelected: 'col-lg-4 col-md-5 mt-1',
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  handleStaffSelected(staff) {
    this.setState({ staffSelected: staff });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleColSelected(col) {
    this.setState({ colNumSelected: col });
  }

  render() {
    console.log(this.state.staffSelected);
    const staffList = this.props.staffs.map(staff => {
      return (
        <div key={staff.id} className={this.state.colNumSelected}>
          <Card
            onClick={() => {
              this.handleStaffSelected(staff);
            }}
          >
            <CardBody className='border border-danger'>
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
          <h5 className='mr-8'>
            Bấm vào ảnh hoặc tên nhân viên để xem thông tin
          </h5>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color='danger'>
              Kiểu hiển thị
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={() => this.handleColSelected('col-lg-2 col-md-5 mt-1')}
              >
                6 cột
              </DropdownItem>
              <DropdownItem
                onClick={() => this.handleColSelected('col-lg-3 col-md-5 mt-1')}
              >
                4 cột
              </DropdownItem>
              <DropdownItem
                onClick={() => this.handleColSelected('col-lg-4 col-md-5 mt-1')}
              >
                3 cột
              </DropdownItem>
              <DropdownItem
                onClick={() => this.handleColSelected('col-lg-5 col-md-5 mt-1')}
              >
                2 cột
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <RenderStaff staff={this.state.staffSelected} />
        <div className='row'>{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
