import styled from 'styled-components'

import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


export const BaseContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  ${MEDIA_QUERIES.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`
