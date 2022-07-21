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
      colNumSelected: 'col-lg-4 col-md-5 mt-1', // set default className for staffList
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleStaffSelected = this.handleStaffSelected.bind(this);
    this.handleColSelected = this.handleColSelected.bind(this);
  }
  // set staffSelected when select staff
  handleStaffSelected(staff) {
    this.setState({ staffSelected: staff });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  // set className for staffList when click on dropdown
  handleColSelected(col) {
    this.setState({ colNumSelected: col });
  }

  render() {
    const staffList = this.props.staffs.map(staff => {
      // get staff from props
      return (
        <div key={staff.id} className={this.state.colNumSelected}>
          <Card
            onClick={() => {
              this.handleStaffSelected(staff);
            }}
          >
            <CardBody className='border border-warning'>
              {/* render staff img & name */}
              <CardImg src={staff.image} alt={staff.name} />
              <CardTitle className='text-center mt-4'>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row mt-3 mb-2'>
          <div className='col-9'>
            <h5>Bấm vào ảnh hoặc tên nhân viên để xem thông tin chi tiết</h5>
          </div>
          <div className='col-2 '>
            {/* dropdown set className */}
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              className='ml-5'
            >
              <DropdownToggle caret color='danger'>
                Kiểu hiển thị
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() =>
                    this.handleColSelected('col-lg-2 col-md-5 mt-1')
                  }
                >
                  6 cột
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    this.handleColSelected('col-lg-3 col-md-5 mt-1')
                  }
                >
                  4 cột
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    this.handleColSelected('col-lg-4 col-md-5 mt-1')
                  }
                >
                  3 cột
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    this.handleColSelected('col-lg-5 col-md-5 mt-1')
                  }
                >
                  2 cột
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        {/* goi ham RenderStaff tu StaffDetail component */}
        <RenderStaff
          staff={this.state.staffSelected}
          handleStaffSelected={this.handleStaffSelected}
        />
        <div className='row'>{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
