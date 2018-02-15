import _ from 'lodash';

const Colors = [
    "blue",
    "orange",
    "violet",
    "green",
    "red",
    "purple",
    "yellow",
    "grey"
]

export default function getNextColor() {
    return _.sample(Colors);
}