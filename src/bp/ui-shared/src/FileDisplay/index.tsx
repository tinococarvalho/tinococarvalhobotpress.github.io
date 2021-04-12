import { Button, Intent, Position, Tooltip } from '@blueprintjs/core'
import mime from 'mime-types'
import React, { FC } from 'react'
import { lang } from '../translations'
import style from './style.scss'
import { FileDisplayProps } from './typings'

const FileDisplay: FC<FileDisplayProps> = props => {
  const { url, type, deletable, onDelete } = props

  const mimeType = mime.lookup(url) || undefined

  const deletableFile = () => (
    <Tooltip content={lang('delete')} position={Position.TOP}>
      <Button className={style.deleteFile} minimal small intent={Intent.DANGER} icon="trash" onClick={onDelete} />
    </Tooltip>
  )

  switch (type) {
    case 'image':
      return (
        <div style={{ backgroundImage: `url('${url}')` }} className={style.imageWrapper}>
          <div className={style.imageWrapperActions}>{deletable && deletableFile()}</div>
        </div>
      )
    case 'audio':
      return (
        <div className={style.audioWrapper}>
          <div className={style.audioWrapperActions}>{deletable && deletableFile()}</div>
          <audio controls className={style.audioWrapperSource}>
            <source src={url} type={mimeType} />
            Your browser does not support the audio element.
          </audio>
        </div>
      )
    default:
      return null
  }
}

export default FileDisplay