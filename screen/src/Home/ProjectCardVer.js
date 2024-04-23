import React from "react";
import './Home.styles';
import { Card, Row, Col } from "react-bootstrap";
import { formatDate } from "../Components/utils";
const ProjectCardVer = ({ project, onToolButtonClick, getClientLogo, getEmployeePhoto }) => (
  <div className="vertical-layout">
    
      <div className="row">
        <div className="client-logo">
          <Card>
            <Card.Img
            className="client-logo-row"
            src={`data:image/jpeg;base64,${getClientLogo(project.clientuuid)}`}
            />
          </Card>
        </div>
        <div className="project-name-row"> 
          <Card>
            <Card.Body>
            <Card.Title>
              <h1>{project.name}</h1>
            </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="project-date-row"> 
          <Card>
            <Card.Body>
            <Card.Title>
              <h2>{formatDate(project.from)} - {formatDate(project.to)}</h2>
            </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="project-description-row"> 
          <div className="col-sm-8 description-col">
            <Card>
              <Card.Body>
              <Card.Title>
                <h2 className="beskrivelse">{project.description}</h2>
              </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4 ydelser-og-tools-col">
            <Card className="ydelser bg-transparent border-0">
              <Card.Title>Ydelser</Card.Title>
              <Card.Text>
                {project.offeringList.map((tool, index) => (
                  <button key={index} className="ydelser-og-tools-knap">
                  {tool}
                  </button>
                ))}
              </Card.Text>
            </Card>
            <Card className="tools bg-transparent border-0">
              <Card.Title>Tools</Card.Title>
              <Card.Text>
                {project.toolsList.map((tool, index) => (
                  <button
                    key={index}
                    className="ydelser-og-tools-knap"
                    onClick={() => onToolButtonClick(tool)}
                  >
                  {tool}
                  </button>
                ))}
              </Card.Text>
            </Card>
          </div>
        </div>
      </div>

      <div className="row">
        <div ClassName="employeerow">
          <Card className="card bg-transparent border-0"> 
            <Card.Body>
              <Row>
                {project.projectDescriptionUserList?.map((user) => (
                <Col className="employeecol" key={user.useruuid}>
                <img
                  className="employeephoto"
                  src={`data:image/jpeg;base64,${getEmployeePhoto(user.useruuid)}`}
                />
                </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    
  </div>
);
export default ProjectCardVer;