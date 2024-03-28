
export function BussinessCard(props) {
    return (
        <>
            {
                props.data.map((item, index) => {
                    return (

                        <div key={index} style={styles.card}>
                            <h1 style={styles.name}>{item.fullName}</h1>
                            <h3 style={styles.description}>{item.desc}</h3>

                            <h3 style={styles.interestsHeader}>Interests</h3>
                            <ul style={styles.interestsList}>
                                {
                                    item.interest.map((interests, index) => {
                                        return <li key={index} style={styles.interestItem}>{interests}</li>
                                    })
                                }
                            </ul>
                            <div style={styles.socialLinks}>
                                {item.socialMedia.tagName.map((tagName, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={item.socialMedia.links[index]}
                                            target="_blank"
                                            style={styles.link}
                                        >
                                            {tagName}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                    )
                })
            }

        </>
    )
}

const styles = {
    card: {
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa'
    },
    name: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
    },
    description: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '15px',
    },
    socialLinks: {
        display: 'flex',
        marginBottom: '15px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#007BFF', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    },
    interestsHeader: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
    },
    interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
    },
};