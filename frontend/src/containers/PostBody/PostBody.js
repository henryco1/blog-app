import React, { Component } from "react";

import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import cssClass from "./PostBody.css";
import HR from "../../components/UI/HR/HR";

class PostBody extends Component {
    state = {
        loading: true,
        postBody: null
    };

    componentDidMount() {
        AxiosInstance.get("posts/view/" + this.props.match.params.slug)
            .then(response =>
                this.setState({ loading: false, postBody: response.data })
            )
            .catch(err => console.log("Error From PostBody.js", err));
    }

    render() {
        let postBody = <Spinner />;
        if (!this.state.loading && this.state.postBody) {
            postBody = (
                <div class={cssClass.PostBodyDiv}>
                    <h1 className={cssClass.Title}>{this.state.postBody.title}</h1>
                    <p className={cssClass.PublishedDate}>{new Date(this.state.postBody.published_on).toDateString()}</p>
                    <HR/>
                    <p className={cssClass.PostBody}>{this.state.postBody.body}</p>
                    <HR/>
                    <div className={cssClass.PostInfo}>
                        <p> - {this.state.postBody.author_full_name}</p>
                    </div>
                </div>
            );
        }

        return postBody;
    }
}

export default PostBody;