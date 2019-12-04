import React from 'react';
import { Container, Form, Grid, Segment } from 'semantic-ui-react';
import FormInfo from "./Forminfo.js";
import '../App.css';
import { tsConstructorType } from '@babel/types';
class Char extends React.Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
  }
  render() {
    return (
      <Container className="App">
        <Form name="formm" method="get">

          {/**/}
          <Segment>
            {/* Basic information */}
            {/* First Row - wrapping around the first row of columns. */}
            <Grid columns={2} stackable divided>
              {/* Grid Column 1 */}
              <Grid.Row stretched>
                <Grid.Column stretched>

                  <Segment>
                    <FormInfo.BasicInfo />
                  </Segment>

                </Grid.Column>

                {/* Grid Column 2 */}
                <Grid.Column>

                  <FormInfo.AbilityTable />
                </Grid.Column>
              </Grid.Row>

              {/* -------------------------------------------------------------- */}

              {/* Personality and background */}
              {/* Second Row - wrapping around the sceond row of columns */}
              {/* Grid Column 1 */}
              <Grid.Row>
                <Grid.Column>
                  <FormInfo.Background />
                </Grid.Column>

                {/* Grid Column 2 */}
                <Grid.Column>
                  <FormInfo.Personality />
                </Grid.Column>
              </Grid.Row>

              {/* -------------------------------------------------------------- */}

              {/* Personality and description */}
              {/* Third Row - wrapping around the third row of columns */}
              {/* Grid Column 1 */}
              <Grid.Row>
                <Grid.Column>

                </Grid.Column>

                {/* Grid Column 2 */}
                <Grid.Column>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Form.Button label="asd" onClick="testResults(this.form)">asd</Form.Button>
        </Form>

      </Container>
    );
  }
}


function testResults (form) {
  let TestVar = form.inputbox.value;
  alert ("You typed: " + TestVar);
}

export default Char;