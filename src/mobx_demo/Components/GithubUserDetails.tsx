import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export const GithubUserDetails = observer(() => {
    const [text, setText] = useState("");
    const {
        rootStore: { githubUserDetails , counterStore }
    } = useStore();

    const onClickButton = () => { 
        githubUserDetails.fetchGithubUserDetails(text)
    }
    return (
        <div>
            <div>
                User Name : {githubUserDetails.getUserDetails?.name} <br />
                User Location : {githubUserDetails.getUserDetails?.location} <br />
                User Name : {githubUserDetails.getUserDetails.name} <br />
                Count value in Github component: {counterStore.getCounterValue}
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="githubuser">
                        <Form.Label>Search Github User</Form.Label>
                        <Form.Control
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            type="text"
                            placeholder="Enter github user name"
                        />
                    </Form.Group>
                    <Button onClick={onClickButton} variant="primary">
                        Search User
                    </Button>
                </Form>
            </div>
        </div>
    )
});