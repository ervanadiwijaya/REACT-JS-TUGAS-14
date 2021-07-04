import React from "react";
import 'semantic-ui-css/semantic.min.css';

import {
  Grid,
  Icon,
  Search,
  List,
  Menu,
  Table,
  Label,
  Container,
  Feed
} from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container style={{ margin: 10 }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="right" colSpan='2'><Search placeholder='Search document...' /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell collapsing>Jenis Document</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

      <Container>
        <Grid columns={2} stackable>
          <Grid.Column width={12} >
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label icon='pencil' />
                <Feed.Content>
                  <Feed.Summary
                    content='You submitted a new post to the page'
                  />
                  <Feed.Date>3 days ago</Feed.Date>
                  <Feed.Extra text>
                    Saya senang belajar bahasa pemrogaman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />11 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>
                    <a>David</a> added <a>2 new image</a>
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a>
                      <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                    </a>
                    <a>
                      <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      2 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>


          <Grid.Column width="4">
            {/* <Segment > */}
            <h3>Website terkait</h3>
            <List>
              <List.Item icon='linkify' content={<a href='#'>Google</a>} />
              <List.Item icon='linkify' content={<a href='#'>Facebook</a>} />
              <List.Item icon='linkify' content={<a href='#'>Semantic UI</a>} />
              <List.Item icon='linkify' content={<a href='#'>Niomic</a>} />
              <List.Item icon='linkify' content={<a href='#'>React</a>} />
            </List>
            {/* </Segment> */}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
