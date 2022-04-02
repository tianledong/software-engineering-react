import {act, create} from "react-test-renderer"
import tuitsJson from "./react-test-renderer/tuits/tuits.json"
import Tuits from "./react-test-renderer/tuits/tuits";

test('tuits render on dislike screen', () => {
    let tuitsRender
    act(() => {
        tuitsRender = create(
            <Tuits
                tuits={tuitsJson}/>
        )
    })
    const root = tuitsRender.root
    const ttrTuits = root.findAllByProps({
        className: 'ttr-tuit'})
    expect(ttrTuits.length).toBe(tuitsJson.length)
    ttrTuits.forEach((ttrTuit, ndx) => {
        expect(ttrTuit.props.children).toBe(tuitsJson[ndx].tuit)
    })
})