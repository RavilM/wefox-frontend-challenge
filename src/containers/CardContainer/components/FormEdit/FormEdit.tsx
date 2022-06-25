import React, {
  FC,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ControlContainer } from '../../../../components/ControlContainer';
import { TChangePostData } from '../../../../api/posts/types';
import { TFormEditProps } from './types';
import './styles.css';

export const FormEdit: FC<TFormEditProps> = memo<TFormEditProps>(
  ({ data, onCancel, onSave, isCreate }) => {
    const [changedData, setChangedData] = useState<TChangePostData>(
      data || {
        title: '',
        content: '',
        long: '',
        lat: '',
        image_url: '',
      },
    );

    useEffect(() => {
      function internalHandler(e: any) {
        e.preventDefault(); // required in some browsers
        e.returnValue = ''; // required in some browsers
        return 'Custom message to show to the user'; // only works in old browsers
      }
      // window.addEventListener('beforeunload', internalHandler, true);
      window.onbeforeunload = internalHandler;

      return function cleanup() {
        window.onbeforeunload = null;
      };
    }, []);

    const handleInputChange = useCallback((event: any) => {
      const target = event.target;

      setChangedData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    }, []);

    const titleForm = useMemo(
      () => (isCreate ? 'New Post' : 'Edit Post'),
      [isCreate],
    );

    const handleSubmit = useCallback(
      (event: FormEvent) => {
        event.preventDefault();
        onSave(changedData);
      },
      [changedData, onSave],
    );

    return (
      <>
        <h3>{titleForm}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="title">Title:</label>
            <br />
            <input
              className="form-input"
              id="title"
              name="title"
              onChange={handleInputChange}
              required
              type="text"
              value={changedData.title}
            />
          </div>

          <div className="form-item">
            <label htmlFor="content">Content:</label>
            <br />
            <textarea
              className="form-textarea"
              id="content"
              name="content"
              onChange={handleInputChange}
              required
              value={changedData.content}
            />
          </div>

          <div className="form-item">
            <label htmlFor="image_url">Image:</label>
            <br />
            <input
              className="form-input"
              id="image_url"
              name="image_url"
              onChange={handleInputChange}
              type="text"
              value={changedData.image_url}
            />
          </div>

          <div className="form-item">
            <label htmlFor="lat">Latitude:</label>
            <br />
            <input
              className="form-input"
              id="lat"
              max={90}
              min={-90}
              name="lat"
              onChange={handleInputChange}
              step="0.000001"
              type="number"
              value={changedData.lat}
            />
          </div>

          <div className="form-item">
            <label htmlFor="long">Longitude:</label>
            <br />
            <input
              className="form-input"
              id="long"
              max={180}
              min={-180}
              name="long"
              onChange={handleInputChange}
              step="0.000001"
              type="number"
              value={changedData.long}
            />
          </div>

          <ControlContainer>
            <button type="submit">Save</button>
            <button onClick={onCancel} type="button">
              Cancel
            </button>
          </ControlContainer>
        </form>
      </>
    );
  },
);
