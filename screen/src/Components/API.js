
const token = "eyJraWQiOiIvcHJpdmF0ZUtleS5wZW0iLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RydXN0d29ya3MuZGsiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkYXZpZC52aW5qZSIsImlhdCI6MTcxOTgxODE2NiwiZXhwIjoxNzE5ODU0MTY2LCJncm91cHMiOlsiVVNFUiJdLCJqdGkiOiI5NWRiYzIyMy1jNWYwLTQzZmEtYjY1Yi0wZjdlNzAyYzlhZWEifQ.GtOaWFf-ekZMKiXHI7K24sMe77Ei5RoXG6UInRx4jySNQTMbfpQ9dTW8peAfrWtBAY13bybpMPFLSZ81iVwvWMoZXMKlM_1Vvop0aw6Ou80JCezloTfYVoHlPg8q5D7lkpoZ6izVYdA6uUEvsTH2fzB-1mNoz1erh-lCgt2SlAeXSzuux3RVLMCJokYsBezZAl6mNKGl5U9ujGEtfYnUP7KsWL_tMAtm6uijj47S7jdRYUDwNLJnI2DvgEupsrSTahKhbQH6orKsr2GJMZYPb2gDMlLkpuyeVvp6bhdm3JCd6iBvhZ1cZbjtZDqNAUlkWTPOPwKjBd_qoq1IIYuW-selm69BGYtcbY32s2GEj7I8irDNTTBTor0s9dfbNXgb-nyoTtIjsxMgaGFzOdL1i7nxQgu1UQZdCiG4Uflg8ZQ9Yu5nJJ8xOgpaFkH85dAI70C9vE7H9nF_Ov6YxorGi40oEJh5OqL9ojEej1KrCZ_3Ec7QB9HRfYmBPZxjNNZm_eLkATqC_P5enUJVj-jfYopETeH_wM8806ayUUehGGhkIswHX12cz2gyFpwjbOD9_-kb8wagKt9rX8soBapO4c8QNBkMYfUYhp2Ow43Q0zyquob_NrdwKZbCgzGFgZjjMq5mmtDiBnK7qAu1q8FJQ_wpbWYbZPRXt1M0op71Iqw";
export const config = { headers: { Authorization: `Bearer ${token}` } };

export async function getProjects(setProjects) {
  try {
    const response = await fetch('https://api.trustworks.dk/knowledge/projects', config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Sort the projects by the "from" field in descending order

    const sortedProjects = data.sort((a, b) => {
      // Convert the "from" values to Date objects for comparison
      const dateA = new Date(a.from);
      const dateB = new Date(b.from);

      // Compare the dates in reverse order (newest first)
      return dateB - dateA;
    });

    // Set the sorted projects in the state
    setProjects(sortedProjects);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    throw error;
  }
}

export async function getEmployeePhotoUuid(useruuid) {
  try {
    const response = await fetch(`https://api.trustworks.dk/public/users/${useruuid}/photo`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.file;
  }
  catch (error) {
    console.error(`Error fetching employee photo for user ${useruuid}:`, error.message);
    throw error;
  }
}

export async function getConsultants(setConsultants) {
  try {
    const response = await fetch('https://api.trustworks.dk/public/users', config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Filter the consultants to include only active consultants
    const activeConsultants = data.filter(consultant =>
      consultant.active && (consultant.type === "CONSULTANT" || consultant.type === "STUDENT")
    );

    // Update the state with the filtered list of active consultants
    setConsultants(activeConsultants);
    
  } catch (error) {
    console.error(`Error fetching client:`, error.message);
    return null;
  }
}


export function getActiveConsultants(consultants) {
  try {
    const activeConsultants = consultants.filter(consultant =>
      consultant.active && (consultant.type === "CONSULTANT" || consultant.type === "STUDENT")
    );

    return activeConsultants;

  }
  catch (error) {
    console.error(`Error fetching client:`, error.message);
    return null;
  }
}

export async function getClients(setClients) {
  try {
    const response = await fetch('https://api.trustworks.dk/public/clients', config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    setClients(data);
  }
  catch (error) {
    console.error(`Error fetching client:`, error.message);
    return null;
  }
}


export async function getClientLogoUudid(clientuuid) {
  try {
    const response = await fetch(`https://api.trustworks.dk/public/files/photos/${clientuuid}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.file;
  }
  catch (error) {
    console.error(`Error fetching client photo for client id ${clientuuid}:`, error.message);
    return null;
  }
}

//Update list of cliets with IDs and logos
export async function updateClientListWithIdPhoto(projects, setClients) {
  try {
    // Using Promise.all to wait for all requests to complete
    await Promise.all(
      projects?.map(async (project) => {
        const response = await fetch(
          `https://api.trustworks.dk/public/files/photos/${project.clientuuid}`,
          config
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setClients((clients) => [
          ...clients,
          { id: project.clientuuid, file: data.file },
        ]);
      })
    );
  } catch (error) {
    console.error(`Error fetching client photos:`, error.message);
    return null;
  }
}


