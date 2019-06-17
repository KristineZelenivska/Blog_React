import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { loadData } from '~/redux/actions/postActions';
import { Link } from 'react-router-dom';

import showResults from './showResults';
import { get } from 'https';
import './otherForm.sass';

const profile = {
  name: 'Kristine',
  surname: 'Zelenivska',
  country: 'Latvia',
  gender: 'Female',
};
// import './otherForm.sass';

class OtherForm extends Component {
  constructor() {
    super();
    this.state = {
      showName: false,
    };
  }
  // componentDidMount() {
  //   console.log('mounted');
  //   this.props.action.loadData(profile);
  // }

  // handleSubmit = (values) => {
  //     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  //   };
  // };
  // onSubmit = () => {
  //   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  //   return async function showResults(values) {
  //     await sleep(500); // simulate server latency
  //     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  //   };
  // };
  doSomething = () => {
    this.setState({ showName: !this.state.showName });
    if (this.state.showName) {
      this.props.reset();
    }
  };

  loading = () => {
    return this.props.action.loadData(profile);
  };

  render() {
    console.log(5555, this.props);
    // console.log(1111, this.props.all.form.register.values);
    const { handleSubmit, pristine, reset, submitting, name } = this.props;
    return (
      <div className="Form">
        <div className="Form__content">
          {this.state.showName ? (
            <h1 className="Form__title">
              Hello, {name} <br /> Nice to meet you
            </h1>
          ) : (
            <h1 className="Form__title">Hello!</h1>
          )}
          <form onSubmit={handleSubmit}>
            <div className="Form__button">
              <Button type="button" onClick={() => this.loading()} color="info">
                Load my Data!
              </Button>
            </div>

            <div>
              <label>Name</label>
              <div>
                <Field className="form-control" type="text" name="name" component="input" placeholder="First name" />
              </div>
            </div>
            <div>
              <label>Surname</label>
              <div>
                <Field className="form-control" type="text" name="surname" component="input" />
              </div>
            </div>

            <div>
              <label>Country</label>
              <div>
                <Field className="form-control" type="text" name="country" component="input" />
              </div>
            </div>

            <div>
              <label>Gender</label>
              <div>
                <Field className="form-control" name="gender" component="select">
                  <option />
                  <option>Male</option>
                  <option>Female</option>
                </Field>
              </div>
            </div>
            <div className="Form__button">
              <Button type="submit" color="info" onClick={() => this.doSomething()} disabled={pristine || submitting}>
                Add!
              </Button>
            </div>
            <div className="Form__button">
              <Button type="submit" color="info" disabled={pristine || submitting} onClick={() => this.doSomething()}>
                Clear form
              </Button>
            </div>
            <div className="Other__link">
              <Link to="/posts" className="other__child__link">
                Check my posts
              </Link>
              {/* </div>
            <div className="Other__link"> */}
              <Link to="/" className="other__child__link">
                Take me Home!
              </Link>
              {/* </div>
            <div className="Other__link"> */}
              <Link to="/forms" className="other__child__link">
                Create new post!
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('humanData');
  return {
    name: selector(state, 'name'),
  };
};

const actionProps = (dispatch) => ({
  action: bindActionCreators({ loadData }, dispatch),
});

export default connect(
  mapStateToProps,
  actionProps,
)(
  reduxForm({
    form: 'humanData',
  })(OtherForm),
);
